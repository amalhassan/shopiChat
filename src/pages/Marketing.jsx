import React from 'react';
import {Page, Box, Grid, Button, Layout, AlphaCard, Text, Tooltip, Icon, HorizontalStack, VerticalStack} from '@shopify/polaris';
import Chatbot from '../components/Chatbot/Chatbot.jsx'
import {
  CalendarMinor, LastNonDirectClickModelMinor, AnalyticsMinor
} from '@shopify/polaris-icons'
import { SparkLineChart } from '@shopify/polaris-viz';
export const Marketing = () => {
  const data = [{key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}, {key: 0, value:0}]
  const x = {}
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
          <Button size="slim" icon={LastNonDirectClickModelMinor} disclosure>Last non-direct click</Button>
        </div>
      </div>
      <div style={{
        marginBottom: '40px'
      }}>
      <Grid columns={{xs: 1, sm: 1, md: 2, lg: 2, xl:3}}>
        <Grid.Cell>
          <AlphaCard padding={0}>
            <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Number of sessions on your online store. A session is a period of continuous activity from a visitor.">
                <Text variant="headingSm" as="h6">Online store sessions</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
        <AlphaCard padding={0}>
            <div style={{marginTop: '11px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Percentage of sessions that resulted in orders, out of the total number of sessions.">
                <Text variant="headingSm" as="h6">Online store conversion rate</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
        <AlphaCard padding={0}>
            <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Equates to ((gross sales - discounts) / orders), excluding post-order adjustments like edits or exchanges.">
                <Text variant="headingSm" as="h6">Average order value</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
        <AlphaCard padding={0}>
            <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels.">
                <Text variant="headingSm" as="h6" >Total sales</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
        <AlphaCard padding={0}>
            <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Total sales that can be attributed to traffic driven to your online store by marketing efforts.">
                <Text variant="headingSm" as="h6">Sales attributed to marketing</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
          </AlphaCard>
        </Grid.Cell>
        <Grid.Cell>
        <AlphaCard padding={0}>
            <div style={{marginTop: '10px', marginLeft: '10px', marginRight: '25px'}}>
            <HorizontalStack align='space-between'>
              <Tooltip hasUnderline preferredPosition='above' content="Total orders that can be attributed to traffic driven to your online store by marketing efforts.">
                <Text variant="headingSm" as="h6">Orders attributed to marketing</Text>
              </Tooltip>
              <div style={{width: '20px'}}>
                <Icon color="base" source={AnalyticsMinor}/>
              </div>
            </HorizontalStack>
            </div>
            <div style={{height: '100px'}}>
              <div style={{marginLeft: '15px'}}>___  __</div>
              <div style={{ height:'100%', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'flex-end', paddingBottom: '40px'}}>
                <SparkLineChart data={[{data}]} theme='Light' />
              </div>
            </div>
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
