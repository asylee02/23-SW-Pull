export type headerType = {
  children: React.ReactNode;
};

export type linkedBTNType = {
  href: string;
  children: React.ReactNode;
};

export type BTNType = {
  onClick: () => void;
  children: React.ReactNode;
};

export type CardType = {
  children: React.ReactNode;
};


export type VoidFn = () => void;

export type ReservationCardProps = {
  date?: Date;
  onTimeSelected: (selectedTime: string) => void;
};

export type ResumesType = {
  name?: string;
  userId: number;
  title: string;
  resumeId?: number;
  resumeText: string;
  isVisuable: boolean;
  image?: string;
  create_at?: string;
};

export type FiledType = {
  field: number;
  detailField: number;
  userId: number;
};

export type ReservationType = {
  time: string;
  userId: number;
  counselorId: number;
};

export type CounselingRecordType = {
  comment: string;
  indicator: string;
  Reservation: number;
};

export type CommentType = {
  comment: string;
  User: number;
  Resume: number;
};
