import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { CreateUserDTO } from '../../../dto';

type StateTypes = CreateUserDTO;

export const handleInput = (state: StateTypes, setState: Dispatch<SetStateAction<StateTypes>>) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event as unknown as { target: HTMLInputElement };
    const attribute = target.name as keyof typeof state;
    const newState = { ...state, [attribute]: target.value };
    setState(newState);
  };
};
