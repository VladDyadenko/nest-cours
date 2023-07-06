import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Унікальний ідентифікатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Гарна новина', description: 'Заголовок посту' })
  @Column({
    type: DataType.STRING,
  })
  title: string;

  @ApiProperty({
    example: 'Найближчим часом у нас буде дощ',
    description: 'Текст поста',
  })
  @Column({
    type: DataType.STRING,
  })
  content: string;

  @ApiProperty({
    example: 'images.jpg',
    description: 'Foto',
  })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.STRING,
  })
  userId: number;

  @BelongsTo(() => User)
  autor: User;
}
