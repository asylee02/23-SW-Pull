import { ResumesType } from '@/utils/type';
import axios from 'axios';

export async function getFields(): Promise<ResumesType[]> {
  const { data } = await axios.get('${process.env.BACKEND_ADRESS}serverfields');
  return data;
}

export async function getField(id: number): Promise<ResumesType> {
  const { data } = await axios.get(`${process.env.BACKEND_ADRESS}serverfield/${id}`);
  return data;
}

export async function createField(obj: ResumesType) {
  const { data } = await axios.post(`${process.env.BACKEND_ADRESS}serverfield`, obj);
  return data;
}

export async function updateField(id: number, obj: ResumesType) {
  const { data } = await axios.put(`${process.env.BACKEND_ADRESS}serverfield/${id}`, obj);
  return data;
}
