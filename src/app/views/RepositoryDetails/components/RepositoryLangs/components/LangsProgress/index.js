import React from 'react';

import {
  Container,
  Progress,
  Langs,
  Lang,
  LangPercentage,
} from './styles'

function LangsProgress({ langs }) {
  return (
    <Container>
      <Progress>
        {langs.map((lang) => (
          <span
            key={lang.name}
            name={lang.name}
            style={{ backgroundColor: lang.color, width: `${lang.percentage}%` }}
          />
        ))}
      </Progress>
      <Langs>
        {langs.map((lang) => (
          <Lang key={lang.name} color={lang.color}>
            {lang.name}
            <LangPercentage>
              {lang.percentage.toFixed(2)}%
            </LangPercentage>
          </Lang>
        ))}
      </Langs>
    </Container>
  );
}

export default LangsProgress;