import {Request, Response} from 'express';
import {IAddressUpdateRequest} from '../../interfaces/addresses';
import {updateUserAddressService} from '../../services/userAddresses/updateUserAddress.service';

const updateAddressesController = async (req: Request, res: Response) => {
	const userId: string = req.user.id;
	const addressId: string = req.params.id;
	const newAddressInfo: IAddressUpdateRequest = req.body.address;

	const updatedUserAddress = await updateUserAddressService(userId, addressId, newAddressInfo);

	return res.status(201).json(updatedUserAddress);
};

export {updateAddressesController};
