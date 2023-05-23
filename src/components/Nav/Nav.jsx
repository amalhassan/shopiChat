import React, {useState, useCallback} from 'react';
import {Frame, TopBar} from '@shopify/polaris';
import {ProfileMajor,  StoreMajor, LogOutMinor} from '@shopify/polaris-icons';
const Nav = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const toggleUserMenuOpen = useCallback(
    () => setUserMenuOpen((userMenuOpen) => !userMenuOpen),
    [],
  );
  const userMenu = (
    <TopBar.UserMenu
        actions={[
          {
            items: [{content: 'Manage account', icon: ProfileMajor}, {content: 'Stores', icon:  StoreMajor}, {content: 'Logout', icon: LogOutMinor}],
          },
          {
            items: [{content: 'Shopify Help Center'}, {content: 'Changelog'}, {content: 'Community forums'}, {content: 'Hire a Shopify expert'}, {content: 'Keyboard shortcuts'}],
          },
        ]}
        avatar='XA'
        initials='XA'
        name='Xquenda Andreev'
        open={userMenuOpen}
        onToggle={toggleUserMenuOpen}
    />
    )
    const TopBarComp = (
      <TopBar
          userMenu={userMenu}
      />
    )
  return (
    <div style={{height:'70px'}}>
      <Frame topBar={TopBarComp} />
    </div>
  );
}

export default Nav