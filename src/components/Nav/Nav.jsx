import React, {useState, useCallback} from 'react';
import {Frame, TopBar, Icon, Text, HorizontalStack} from '@shopify/polaris';
import {ProfileMajor,  StoreMajor, LogOutMinor, NotificationMajor, FilterMinor, CircleTickOutlineMinor} from '@shopify/polaris-icons';
const Nav = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [notifyMenu, setNotifyMenu] = useState(false);
  const toggleUserMenu = useCallback(
    () => setUserMenu((userMenu) => !userMenu),
    [],
  );
  const toggleNotifyMenu = useCallback(
    () => setNotifyMenu((notifyMenu) => !notifyMenu),
    [],
  );
  const userMenuComp = (
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
        open={userMenu}
        onToggle={toggleUserMenu}
    />
    )
    const NotifyMenuComp = (
      <TopBar.Menu
        activatorContent={
          <span>
            <Icon source={NotificationMajor} />
            <Text as="span" visuallyHidden>
              Notification menu
            </Text>
          </span>
        }
        open={notifyMenu}
        onOpen={toggleNotifyMenu}
        onClose={toggleNotifyMenu}
        actions={[
          {
            items: [
              {content: 
              <HorizontalStack align='space-between' style={{width:'300px'}}>
                <Text as='h2'>Alerts</Text>
                <span>
                  <Icon source={FilterMinor}></Icon>
                  <Icon source={CircleTickOutlineMinor}></Icon>
                </span>
              </HorizontalStack>}]},
            {items: [
              {content: 'No alerts'}  
            ]
          },
        ]}
      />
    );
    const TopBarComp = (
      <TopBar
          userMenu={userMenuComp}
          secondaryMenu={NotifyMenuComp}
      />
    )
  return (
    <div style={{height:'70px'}}>
      <Frame topBar={TopBarComp} />
    </div>
  );
}

export default Nav