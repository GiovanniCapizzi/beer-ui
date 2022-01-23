import { G, Path } from 'react-native-svg';
import { headerColors } from '../Common/colors';
import * as React from 'react';

export const PrimaryForwardHeader = () => (
  <G data-name="Header Group">
    <Path
      fill={headerColors.thirdLayer}
      d="M184.446 134.026S84.046 82.674.352 133.314c-.656.4-.194-29.843-.194-79.015 0 0 180.062-40.547 184.288 24.239s0 55.488 0 55.488z"
      data-name="Trace 1"
    />
    <Path
      fill={headerColors.secondLayer}
      d="M390.646 179.022s-127.707 40.423-217.87-52.19S0 101.454 0 101.454V7h390.646z"
      data-name="Trace 2"
    />
    <Path
      fill={headerColors.firstLayer}
      d="M390.646 172.022s-127.707 40.423-217.87-52.19S0 46.917 0 46.917V.001h390.646z"
      data-name="Trace 3"
    />
  </G>
);

export const PrimaryBackwardHeader = () => (
  <G data-name="Header Group">
    <Path
      fill={headerColors.thirdLayer}
      d="M206.2 134.026s100.4-51.352 184.094-.712c.656.4.194-29.843.194-79.015 0 0-180.062-40.547-184.288 24.239s0 55.488 0 55.488z"
      data-name="Trace 1"
    />
    <Path
      fill={headerColors.secondLayer}
      d="M.646 179.022s127.707 40.423 217.87-52.19 172.776-25.378 172.776-25.378V7H.646z"
      data-name="Trace 2"
    />
    <Path
      fill={headerColors.firstLayer}
      d="M0 172.022s127.707 40.423 217.87-52.19 172.776-72.916 172.776-72.916V0H0z"
      data-name="Trace 3"
    />
  </G>
);

export const SecondaryForwardHeader = () => (
  <G data-name="Header Group">
    <Path
      fill={headerColors.secondLayer}
      d="M390.646 182.268s-127.707 40.423-217.87-52.19S0 104.7 0 104.7V10.246h390.646z"
      data-name="Trace 1"
    />
    <Path
      fill={headerColors.firstLayer}
      d="M390.646 121.564s-127.932 64.875-218.1-13.67S-.004 49.673-.004 49.673V0h390.65z"
      data-name="Trace 2"
    />
  </G>
);

export const SecondaryBackwardHeader = () => (
  <G data-name="Header Group">
    <Path
      fill={headerColors.secondLayer}
      d="M0 182.267s127.707 40.423 217.87-52.19 172.776-25.378 172.776-25.378V10.245H0z"
      data-name="Trace 1"
    />
    <Path
      fill={headerColors.firstLayer}
      d="M0 121.564s127.932 64.875 218.1-13.67 172.546-58.221 172.546-58.221V0H0z"
      data-name="Trace 2"
    />
  </G>
);
