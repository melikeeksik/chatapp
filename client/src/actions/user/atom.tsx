import { atom } from 'recoil';

interface userAtomProps {
  name?: string;
  room?: string;
}

export const userAtom = atom({
  key: 'userAtom',
  default: {} as userAtomProps,
});
