import { Exclude } from 'class-transformer';
import {

	Entity,
	Column,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	OneToOne,
	OneToMany,
	ManyToOne,
} from 'typeorm';
import {UserAddress} from './user_addresses.entity';
import {Cart} from './cart.entity';
import {PaymentInfo} from './paymentInfo.entity';
import { Order } from './order.entity';


@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column({ length: 60 })
  fullName: string;

  @Column({ length: 60 })
  userName: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 120 })
  @Exclude()
  password: string;

  @Column({ default: false })
  isRestaurant: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany((type) => UserAddress, (address) => address.user)
  address: UserAddress[];

  @OneToOne((type) => PaymentInfo, { eager: true })
  @JoinColumn()
  paymentInfo: PaymentInfo;


	@OneToMany(() => UserAddress, adress => adress.user)
	addresses: UserAddress[];

	@OneToMany(() => Order, order => order.user)
	orders: Order[];

  @OneToOne((type) => Cart, { eager: true })
  @JoinColumn()
  cart: Cart;

}

export { Users };
