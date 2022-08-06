export default class DateController {
  static toStringTimeAgo(d = new Date(), timeNow = new Date()) {
    try {
      if (d.toString() === 'Invalid Date') return 'Invalid Date';

      const dif = timeNow.getTime() - d.getTime();
      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      days = Math.floor(dif / 1000 / 60 / 60 / 24);
      if (days !== 0) return `${days} д назад`;
      // hours = Math.round((dif - days * 1000 * 60 * 60 * 24) / 1000 / 60 / 60);
      // if (days !== 0) return `${days} д ${hours} ч назад`;

      hours = Math.floor(dif / 1000 / 60 / 60);
      if (hours !== 0) return `${hours} ч назад`;
      // minutes = Math.round((dif - hours * 1000 * 60 * 60) / 1000 / 60);
      // if (hours !== 0) return `${hours} ч ${minutes} мин назад`;

      minutes = Math.floor(dif / 1000 / 60);
      if (minutes !== 0) return `${minutes} мин назад`;
      // seconds = Math.round((dif - minutes * 1000 * 60) / 1000);
      // if (minutes !== 0) return `${minutes} мин ${seconds} сек назад`;

      seconds = Math.floor(dif / 1000);
      return `${seconds} сек назад`;
    } catch (error) {
      return '';
    }
  }
}
