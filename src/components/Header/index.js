import * as React from 'react';
import * as Styles from './styles';
import { Grid } from '../Grid';

const Header = () => (
  <Styles.Wrapper>
    <Grid>
      <Styles.Container>
        <Styles.Logo to="/">Hakof</Styles.Logo>
        <Styles.Menu>
          <Styles.MenuItem>Articles</Styles.MenuItem>
          <Styles.MenuItem>Novels</Styles.MenuItem>
        </Styles.Menu>
      </Styles.Container>
    </Grid>
  </Styles.Wrapper>
);

export default Header;