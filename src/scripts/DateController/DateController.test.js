import DateController from './DateController';

test('toStringTimeAgo() Получили разницу времени?', () => {
  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 10:55:00'),
      new Date('2022-01-22 11:00:00')
    )
  ).toBe('21 д назад');

  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 10:55:00'),
      new Date('2022-01-02 11:00:00')
    )
  ).toBe('1 д назад');

  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 10:55:00'),
      new Date('2022-01-01 11:00:00')
    )
  ).toBe('5 мин назад');

  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 11:55:00'),
      new Date('2022-01-01 13:00:00')
    )
  ).toBe('1 ч назад');

  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 11:55:12'),
      new Date('2022-01-01 11:55:23')
    )
  ).toBe('11 сек назад');

  expect(
    DateController.toStringTimeAgo(
      new Date('2022-01-01 11:55:12'),
      new Date('2022-01-01 11:56:23')
    )
  ).toBe('1 мин назад');
});
