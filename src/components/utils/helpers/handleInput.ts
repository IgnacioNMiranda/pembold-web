import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { UserCredentialsDTO } from '../../../dto';

type StateTypes = UserCredentialsDTO;

export const handleInput = (state: StateTypes, setState: Dispatch<SetStateAction<StateTypes>>) => {
  return (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event as unknown as { target: HTMLInputElement };
    const attribute = target.name as keyof typeof state;
    const newState = { ...state, [attribute]: target.value };
    setState(newState);
  };
};
