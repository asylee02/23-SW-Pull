export function timeAgo(createdAt: string) {
  const createdAtDate = new Date(createdAt);

  // 현재 날짜와 createdAt 사이의 차이 계산
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - createdAtDate.getTime();
  const oneDay = 24 * 60 * 60 * 1000; // 1일의 밀리초 수

  let timeAgoText: string;

  if (timeDifference < oneDay) {
    // 1일 이내일 경우
    timeAgoText = '오늘';
  } else if (timeDifference < 2 * oneDay) {
    // 2일 이내일 경우
    timeAgoText = '1일 전';
  } else {
    // 그 이외의 경우
    timeAgoText = '2일 이상';
  }

  return timeAgoText;
}
