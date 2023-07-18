export const getTimeByDuration = (duration: number) => {
  const minutes = Math.floor(duration / 100000);
  if (minutes == 0) {
    const seconds = duration - minutes * 1000;
    return `${minutes}:${seconds.toString().substring(0, 2)}`;
  }
  return minutes;
};

export const getTimeStartByDuration = (duration: number) => {
  const minutes = Math.floor(duration / 100000);
  if (minutes == 0) {
    const seconds = duration - minutes * 1000;

    if (seconds.toString().length > 3) {
      return `${minutes}:${seconds.toString().substring(0, 2)}`;
    }
  }
  return minutes;
};
