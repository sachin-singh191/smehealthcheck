import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Company extends Model<Company> {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  companyName: string;

  @Column({
    type: DataType.STRING(9),
    allowNull: false,
  })
  companyUEN: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { isEmail: true }
  })
  applicantEmail: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { is: /^\+65\d{8}$/ }
  })
  applicantPhoneNumber: string;

  @Column({
    type: DataType.STRING(9),
    allowNull: false,
  })
  position: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  termsAccepted: boolean;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true
  })
  documentURLs: string[];
}
