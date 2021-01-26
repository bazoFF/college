<?php

namespace App\Dto\Person;

use App\Models\Person;

class PersonDto
{
    public string $id;
    public string $lastName;
    public string $firstName;
    public string $middleName;
    public int $age;
    public int $salary;
    public string $passportSeries;
    public string $passportNumber;
    public string $email;
    public string $phone;

    public static function create($person): self
    {
        $dto = new self();

        if ($person instanceof Person) {
            $person = $person->toArray();
            $dto->id = $person['id'];
        }

        $dto->lastName = $person['lastName'];
        $dto->firstName = $person['firstName'];
        $dto->middleName = $person['middleName'];
        $dto->age = $person['age'];
        $dto->salary = $person['salary'];
        $dto->passportSeries = $person['passportSeries'];
        $dto->passportNumber = $person['passportNumber'];
        $dto->email = $person['email'];
        $dto->phone = $person['phone'];

        return $dto;
    }
}
