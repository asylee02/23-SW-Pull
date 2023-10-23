import { ResumesType } from '@/utils/type';
import axios from 'axios';

export async function getResumes(): Promise<ResumesType[]> {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/resume`);
  return data;
}

export async function getResume(id: number): Promise<ResumesType> {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/resume/${id}`);
  return data;
}

export async function createResume(obj: ResumesType ) {
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/resume`, obj);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function updateResume(id: number, obj: ResumesType) {
  try {
    const { data } = await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/resume/${id}`, obj);
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function convertResume(formData: Object) {
  console.log(formData);
  try {
    const { data } = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/resume/text`, formData);
    return data;
  } catch (e) {
    console.error(e);
  }
}
