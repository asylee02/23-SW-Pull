import { CommentType } from '@/utils/type';
import axios from 'axios';

export async function getComments(): Promise<CommentType[]> {
  const { data } = await axios.get('${process.env.BACKEND_ADRESS}servercomments');
  return data;
}

export async function getComment(id: number): Promise<CommentType> {
  const { data } = await axios.get(`${process.env.BACKEND_ADRESS}servercomment/${id}`);
  return data;
}

export async function createComment(object: CommentType): Promise<CommentType> {
  const { data } = await axios.post('${process.env.BACKEND_ADRESS}servercomment', object);
  return data;
}

export async function updateComment(id: number, object: CommentType): Promise<CommentType> {
  const { data } = await axios.put(`${process.env.BACKEND_ADRESS}servercomment/${id}`, object);
  return data;
}

export async function deleteComment(id: number): Promise<CommentType> {
  const { data } = await axios.delete(`${process.env.BACKEND_ADRESS}servercomment/${id}`);
  return data;
}
