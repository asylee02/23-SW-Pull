import { CounselingRecordType } from '@/utils/type';
import axios from 'axios';

export async function getRecords(): Promise<CounselingRecordType[]> {
  const { data } = await axios.get(`${process.env.BACKEND_ADRESS}servercounseling-record`);
  return data;
}

export async function getRecord(id: number): Promise<CounselingRecordType> {
  const { data } = await axios.get(`api/counseling-record/${id}`);
  return data;
}

export async function createRecord(obj: CounselingRecordType): Promise<CounselingRecordType> {
  const { data } = await axios.post(`api/counseling-record`, obj);
  return data;
}

export async function deleteRecord(id: number) {
  const { data } = await axios.delete(`${process.env.BACKEND_ADRESS}servercounseling-record/${id}`);
  return data;
}

export async function updateRecord(id: number, obj: CounselingRecordType) {
  const { data } = await axios.put(`${process.env.BACKEND_ADRESS}servercounseling-record/${id}`, obj);
  return data;
}
