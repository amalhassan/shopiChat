import {Page, Box, Grid, Button, Layout, AlphaCard} from '@shopify/polaris';
import Chatbot from '../components/Chatbot/Chatbot.jsx'
import {
  CalendarMinor, AnalyticsMinor
} from '@shopify/polaris-icons'

export const Marketing = () => {
  return (
    <Page
      title="Marketing"
      compactTitle
      primaryAction={{content: 'Create campaign', disabled: false}}
    >
      <div style={{
        marginBottom: '40px',
        display: 'flex',
        gap: '4rem',
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
        }}>

          <Button size="slim" icon={CalendarMinor}>Apr 22–May 21, 2023</Button>
          <Button size="slim">Compare: Previous period</Button>
        </div>
        <div style={{
          marginLeft: 'auto',
        }}>
          <Button size="slim" icon={AnalyticsMinor} disclosure={'down'}>Last non-direct click</Button>
        </div>
      </div>
      <div style={{
        marginBottom: '40px'
      }}>
      <Grid columns={{sm: 1, md: 3, lg: 3, xl:3}}>
        <Grid.Cell>
          <AlphaCard title="Sales" sectioned>
            <p>View a summary of your online store’s sales.</p>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
          <AlphaCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
          <AlphaCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
          <AlphaCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
          <AlphaCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
          <AlphaCard title="Orders" sectioned>
            <p>View a summary of your online store’s orders.</p>
          </AlphaCard>
        </Grid.Cell>
      </Grid>
      </div>
      <Layout>
        <Layout.Section>
          <AlphaCard title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </AlphaCard>
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>
          <AlphaCard title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </AlphaCard>
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>
          <AlphaCard title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </AlphaCard>
        </Layout.Section>
      </Layout>
      <Box as='div' position='absolute' insetBlockEnd='0' insetInlineEnd='0' padding='4'>
        <Chatbot />
      </Box>
    </Page>
  );
}
