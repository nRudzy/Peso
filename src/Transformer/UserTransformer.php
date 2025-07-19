<?php

declare(strict_types=1);

namespace App\Transformer;

use App\Entity\User;

class UserTransformer
{
    /**
     * Transform a single user entity to array
     */
    public function transform(User $user, bool $includePrivateData = false): array
    {
        $data = [
            'id' => $user->getId(),
            'name' => $user->getName(),
            'gender' => $user->getGender(),
            'age' => $user->getAge(),
            'height' => $user->getHeight(),
            'initialWeight' => $user->getInitialWeight(),
            'targetWeight' => $user->getTargetWeight(),
            'weightUnit' => $user->getWeightUnit(),
            'heightUnit' => $user->getHeightUnit(),
            'isProfilePublic' => $user->isProfilePublic(),
            'createdAt' => $user->getCreatedAt()?->format('Y-m-d H:i:s'),
        ];

        if ($includePrivateData) {
            $data['email'] = $user->getEmail();
            $data['isEmailVerified'] = $user->isEmailVerified();
            $data['updatedAt'] = $user->getUpdatedAt()?->format('Y-m-d H:i:s');
        }

        return $data;
    }

    /**
     * Transform multiple user entities to array
     */
    public function transformMultiple(array $users, bool $includePrivateData = false): array
    {
        return array_map(
            fn(User $user) => $this->transform($user, $includePrivateData),
            $users
        );
    }

    /**
     * Transform user for public profile (without private data)
     */
    public function transformPublic(User $user): array
    {
        return $this->transform($user, false);
    }

    /**
     * Transform user for admin view (with all data)
     */
    public function transformAdmin(User $user): array
    {
        return $this->transform($user, true);
    }

    /**
     * Transform user for own profile view
     */
    public function transformOwn(User $user): array
    {
        return $this->transform($user, true);
    }
} 