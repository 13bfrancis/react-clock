import React from 'react';
import { render } from 'react-dom';
import {
  Backdrop,
  OuterClock,
  SecondHand,
  MinuteHand,
  HourHand
} from './clockStyles';

export default () => (
  <Backdrop>
    <OuterClock>
      <SecondHand />
      <MinuteHand />
      <HourHand />
    </OuterClock>
  </Backdrop>
);