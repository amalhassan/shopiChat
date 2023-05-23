import React, {useState, useCallback} from 'react';
import {Frame, TopBar, Icon, Text, HorizontalStack, ActionList} from '@shopify/polaris';
import {ProfileMajor,  StoreMajor, LogOutMinor, NotificationMajor, FilterMinor, CircleTickOutlineMinor, AppsMajor, SettingsMajor,} from '@shopify/polaris-icons';
const Nav = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [notifyMenu, setNotifyMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const toggleUserMenu = useCallback(
    () => setUserMenu((userMenu) => !userMenu),
    [],
  );
  const toggleNotifyMenu = useCallback(
    () => setNotifyMenu((notifyMenu) => !notifyMenu), 
    [],
  );
  const handleSearchResultsDismiss = useCallback(() => {
    setSearch(false);
    setSearchValue('');
  }, []);
  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setSearch(value.length > 0);
  }, []);
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
    const searchResultsComp = (
      <ActionList
        items={[{content: 'Recommended Apps', icon: AppsMajor }, {content: 'App and sales channel setting', icon: SettingsMajor}]}
      />
    );
    const searchBarComp = (
      <TopBar.SearchField
        onChange={handleSearchChange}
        value={searchValue}
        placeholder="Search"
        showFocusBorder
      />
    );
    const TopBarComp = (
      <TopBar
          showNavigationToggle
          userMenu={userMenuComp}
          secondaryMenu={NotifyMenuComp}
          searchResultsVisible={search}
          searchField={searchBarComp}
          searchResults={searchResultsComp}
          onSearchResultsDismiss={handleSearchResultsDismiss}
      />
    )
    const logo = {
      width: 124,
      topBarSource:
      "//s27.q4cdn.com/572064924/files/design/logo/shopify_logo_whitebg.svg",
      url: '#',
      accessibilityLabel: 'Shopify logo',
    };
  return (
    <div style={{height:'70px'}}>
      <Frame topBar={TopBarComp} logo={logo}/>
    </div>
  );
}

export default Nav