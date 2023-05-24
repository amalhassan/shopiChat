import React, {useState, useCallback} from 'react';
import {Frame, TopBar, Icon, Text, HorizontalStack, ActionList, Navigation, Button, Box} from '@shopify/polaris';
import {ProfileMajor,  StoreMajor, LogOutMinor, NotificationMajor, FilterMinor, CircleTickOutlineMinor, AppsMajor, SettingsMajor, 
  HomeMinor, 
  OrdersMinor,
  ProductsMinor,
  StoreMinor,
  CustomersMinor,
  FinancesMinor,
  AnalyticsMinor,
  MarketingMinor, 
  DiscountsMinor, 
  ChevronRightMinor, 
  PointOfSaleMajor, 
  ButtonMinor,
  InviteMinor,
  SearchMinor,
  WandMinor, 
  SettingsMinor} from '@shopify/polaris-icons';
const Nav = () => {
  const [userMenu, setUserMenu] = useState(false);
  const [notifyMenu, setNotifyMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mobileNav, setMobileNav] = useState(false);
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
  const toggleMobileNavMenu = useCallback(() => 
    setMobileNav((mobileNav) => !mobileNav),
  []);
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
          onNavigationToggle={toggleMobileNavMenu}
      />
    )
    const logo = {
      width: 124,
      topBarSource:
      "//s27.q4cdn.com/572064924/files/design/logo/shopify_logo_whitebg.svg",
      url: '#',
      accessibilityLabel: 'Shopify logo',
    };
    const SideBarComp = (
      <div style={{marginLeft: '5px'}}>
      <Navigation location="/"> 
          <Box width='70%' style={{marginLeft:'20px', marginRight: '15px', marginBottom: '10px'}}>
            <Button fullWidth size='medium' textAlign="left" disclosure>Vandelay Industries</Button>
          </Box>
          <Navigation.Section 
            items={[
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Home',
                icon: HomeMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Orders',
                icon: OrdersMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Products',
                icon: ProductsMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Customers',
                icon:  CustomersMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Finances',
                icon: FinancesMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Analytics',
                icon: AnalyticsMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Marketing',
                icon: MarketingMinor,
                selected: true,
                subNavigationItems: [
                  {
                    url: '#',
                    excludePaths: ['#'],
                    disabled: false,
                    label: 'Campaigns',
                  },
                  {
                    url: '#',
                    excludePaths: ['#'],
                    disabled: false,
                    label: 'Automations',
                  },
                ]
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Discounts',
                icon: DiscountsMinor,
              },
            ]}
            
          />
          <Navigation.Section
            title="Sales channels"
            items={[
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Online Store',
                icon: StoreMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Point of Sale',
                icon: PointOfSaleMajor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Shop',
                icon: ButtonMinor,
              },
            ]}
            action={{
              accessibilityLabel: 'Add sales channel',
              icon: ChevronRightMinor,
              onClick: () => {},
            }}
          />
          <Navigation.Section
            title="Apps"
            items={[
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Shopify Email',
                icon: InviteMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Shopify Search & Dis..',
                icon: SearchMinor,
              },
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Shopify Flow',
                icon: WandMinor,
              },
            ]}
            action={{
              accessibilityLabel: 'See apps',
              icon: ChevronRightMinor,
              onClick: () => {},
            }}
          />
          <Navigation.Section
            items={[
              {
                url: '#',
                excludePaths: ['#'],
                label: 'Settings',
                icon: SettingsMinor,
              },
            ]}
          />
        </Navigation>
        </div>
      )
  return ( 
    <div style={{height:'70px'}}>
      <Frame 
        topBar={TopBarComp} 
        logo={logo} 
        navigation={SideBarComp} 
        showMobileNavigation={mobileNav}
        onNavigationDismiss={toggleMobileNavMenu}
      />
    </div>
  );
}

export default Nav