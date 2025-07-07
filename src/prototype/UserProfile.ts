// TODO: реалізуйте клас або інтерфейс тут
import { UserProfilePrototype } from "./UserProfilePrototype";

type Department = "finance" | "engineering" | "marketing";

type Permissions = {
  canEditUsers: boolean;
  canApproveBudget: boolean;
  canAccessInternalTools: boolean;
};

export class UserProfile implements UserProfilePrototype {
  constructor(
    public username: string,
    public department: Department,
    public permissions: Permissions
  ) {}

  public clone(): UserProfilePrototype {
    return new UserProfile(
      this.username,
      this.department,
      {
        ...this.permissions // глибока копія об’єкта прав
      }
    );
  }
}

