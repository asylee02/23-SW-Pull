import { ReservationType } from '@/utils/type';
import axios from 'axios';

export async function getReservations(): Promise<ReservationType[]> {
  const { data } = await axios.get(`${process.env.BACKEND_ADDRESS}/reservation`);
  return data;
}

export async function getReservation(id: number): Promise<ReservationType> {
  const { data } = await axios.get(`${process.env.BACKEND_ADDRESS}/reservation/${id}`);
  return data;
}

export async function createField(obj: ReservationType) {
  const { data } = await axios.post(`${process.env.BACKEND_ADDRESS}/reservation`, obj);
  return data;
}

export async function updateField(id: number, obj: ReservationType) {
  const { data } = await axios.put(`${process.env.BACKEND_ADDRESS}/reservation/${id}`, obj);
  return data;
}

export async function deleteField(id: number) {
  const { data } = await axios.put(`${process.env.BACKEND_ADDRESS}/reservation/${id}`);
  return data;
}
