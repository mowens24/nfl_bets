// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useState } from 'react';
import Box from '@cloudscape-design/components/box';
import Popover from '@cloudscape-design/components/popover';
import Link from '@cloudscape-design/components/link';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
import { Navigation as CommonNavigation } from '../../commons';
import { DensityPreferencesDialog } from './density-preferences';

const navItems: SideNavigationProps['items'] = [
  { type: 'link', text: 'Dashboard', href: '#/' },
  {
    type: 'link',
    text: 'N/A',
    href: '#/events',
    info: (
      <Box color="text-status-info" variant="span">
        <Popover
          header="Introducing events"
          size="medium"
          triggerType="text"
          content={
            <>
              AWS can schedule events for your instances, such as reboot, stop/start, or retirement.{' '}
              <Link
                external={true}
                ariaLabel="Learn more about events management, opens in new tab"
                href="#"
                variant="primary"
              >
                Learn more
              </Link>
            </>
          }
          renderWithPortal={true}
          dismissAriaLabel="Close"
        >
          <Box
            variant="span"
            color="text-status-info"
            fontSize="body-s"
            fontWeight="bold"
            data-testid="new-feature-announcement-trigger"
          >
            New
          </Box>
        </Popover>
      </Box>
    ),
  },
  { type: 'link', text: 'N/A', href: '#/tags' },
  { type: 'link', text: 'N/A', href: '#/reports' },
  { type: 'link', text: 'N/A', href: '#/limits' },
  {
    text: '',
    type: 'section',
    defaultExpanded: true,
    items: [
      { type: 'link', text: 'N/A', href: '#/instances' },
      {
        type: 'link',
        text: 'N/A',
        href: '#/launch_templates',
        info: (
          <Box color="text-status-info" variant="span">
            <Popover
              header="Introducing launch templates"
              size="medium"
              triggerType="text"
              content={
                <>
                  Launch templates is a new capability that enables a new way to templatize your launch requests. Launch
                  templates streamline and simplify the launch process for auto scaling, spot fleet, spot, and on-demand
                  instances.{' '}
                  <Link
                    external
                    href="#"
                    ariaLabel="Learn more about launch templates, opens in new tab"
                    variant="primary"
                  >
                    Learn more
                  </Link>
                </>
              }
              renderWithPortal={true}
              dismissAriaLabel="Close"
            >
              <Box color="text-status-info" fontSize="body-s" fontWeight="bold" variant="span">
                New
              </Box>
            </Popover>
          </Box>
        ),
      },
      { type: 'link', text: 'N/A', href: '#/spot_requests' },
      { type: 'link', text: 'N/A', href: '#/reserved_instances' },
      { type: 'link', text: 'N/A', href: '#/dedicated_hosts' },
      {
        type: 'link',
        text: 'N/A',
        href: '#/scheduled_instances',
        info: (
          <Box color="text-status-info" variant="span">
            <Popover
              data-testid="beta"
              header="Beta feature"
              size="medium"
              triggerType="text"
              content={
                <>
                  We are improving the way to create scheduled instances.{' '}
                  <Link
                    external
                    href="#"
                    ariaLabel="Learn more about instance scheduling, opens in new tab"
                    variant="primary"
                  >
                    Learn more
                  </Link>
                </>
              }
              renderWithPortal={true}
              dismissAriaLabel="Close"
            >
              <Box color="text-status-info" fontSize="body-s" fontWeight="bold" variant="span">
                Beta
              </Box>
            </Popover>
          </Box>
        ),
      },
      { type: 'link', text: 'N/A', href: '#/capacity_reservations' },
    ],
  },
  {
    text: 'N/A',
    type: 'section',
    defaultExpanded: false,
    items: [
      { type: 'link', text: 'N/A', href: '#/amis' },
      { type: 'link', text: 'N/A', href: '#/bundle_tasks' },
    ],
  },
  {
    text: 'N/A',
    type: 'section',
    defaultExpanded: false,
    items: [
      { type: 'link', text: 'N/A', href: '#/volumes' },
      { type: 'link', text: 'N/A', href: '#/snapshots' },
      { type: 'link', text: 'N/A', href: '#/lifecycle_manager' },
    ],
  },
  {
    text: 'N/A',
    type: 'section',
    defaultExpanded: false,
    items: [
      { type: 'link', text: 'N/A', href: '#/security_groups' },
      { type: 'link', text: 'N/A', href: '#/elastic_ips' },
      { type: 'link', text: 'N/A', href: '#/placement_groups' },
      { type: 'link', text: 'N/A', href: '#/key_pairs' },
      { type: 'link', text: 'N/A', href: '#/network_interfaces' },
    ],
  },
  {
    text: 'N/A',
    type: 'section',
    defaultExpanded: false,
    items: [
      { type: 'link', text: 'N/A', href: '#/load_balancers' },
      { type: 'link', text: 'N/A', href: '#/target_groups' },
    ],
  },
  {
    text: 'N/A',
    type: 'section',
    defaultExpanded: false,
    items: [
      { type: 'link', text: 'N/A', href: '#/launch_configurations' },
      { type: 'link', text: 'N/A', href: '#/auto_scaling_groups' },
    ],
  },
  { type: 'divider' },
  {
    type: 'link',
    href: '#/density_settings',
    text: 'Density settings',
  },
];

export function DashboardSideNavigation() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const onFollowHandler: SideNavigationProps['onFollow'] = event => {
    event.preventDefault();
    if (event.detail.href === '#/density_settings') {
      setDialogVisible(true);
    }
  };

  return (
    <>
       <CommonNavigation items={navItems} activeHref="#/" onFollowHandler={onFollowHandler} />
       {dialogVisible && <DensityPreferencesDialog onDismiss={() => setDialogVisible(false)} />}
  //  </>
  );
}
 
