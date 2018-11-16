import * as React from 'react';
import { Grid } from '../Grid';
import * as Styles from './styles';

class Header extends React.PureComponent<{}, { showMenu: boolean }> {
  public state = { showMenu: false };

  public toggleMenu = () => {
    const { showMenu } = this.state;
    this.setState({ showMenu: !showMenu });
  }

  public render() {
    const { showMenu } = this.state;

    return (
      <Styles.Wrapper>
        <Grid>
          <Styles.Container>
            <Styles.Logo to="/">Hakof</Styles.Logo>
            <Styles.MenuIcon onClick={this.toggleMenu} />
            <Styles.Menu show={showMenu}>
              <Styles.MenuItem>Articles</Styles.MenuItem>
              <Styles.MenuItem>Novels</Styles.MenuItem>
            </Styles.Menu>
          </Styles.Container>
        </Grid>
      </Styles.Wrapper>
    );
  }
}

export default Header;