<?php

namespace App\Dto\Loan;

class PersonDto
{
    public static function create(array $fields): self
    {
        $dto = new self();
        $dto->lastName = $fields['lastName'];
        $dto->firstName = $fields['firstName'];
        $dto->middleName = $fields['middleName'];
        $dto->age = $fields['age'];
        $dto->salary = $fields['salary'];
        $dto->passportSeries = $fields['passportSeries'];
        $dto->passportNumber = $fields['passportNumber'];
        $dto->email = $fields['email'];
        $dto->phone = $fields['phone'];

        return $dto;
    }

    public string $lastName;

    public string $firstName;

    public string $middleName;

    public int $age;

    public int $salary;

    public string $passportSeries;

    public string $passportNumber;

    public string $email;

    public string $phone;
}
