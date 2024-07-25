import create from 'zustand';

interface PostState {
  content: string;
  setContent: (content: string) => void;
  account: string;
  setAccount: (account: string) => void;
}

export const usePostStore = create<PostState>((set) => ({
  content: '',
  setContent: (content) => set({ content }),
  account: '',
  setAccount: (account) => set({ account }),
}));
