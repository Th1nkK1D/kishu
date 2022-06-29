import { Model, DataTypes } from "denodb";

export type SiteRecord = {
  id: number;
  name: string;
};

export class Site extends Model {
  static table = "sites";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  };
}
