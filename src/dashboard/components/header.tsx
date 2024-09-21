// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React from 'react';
import { HelpPanel, Header } from '@cloudscape-design/components';
import { ExternalLinkGroup, InfoLink, useHelpPanel } from '../../commons';

export function DashboardMainInfo() {
  return (
    <HelpPanel
      header={<h2>Service</h2>}
      footer={
        <ExternalLinkGroup
          items={[
            { href: '#', text: 'N/A' },
            { href: '#', text: 'N/A' },
            { href: '#', text: 'N/A' },
            { href: '#', text: 'N/A' },
            { href: '#', text: 'N/A' },
          ]}
        />
      }
    >
      <p>
        Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizeable computing
        capacity&mdash;literally, servers in Amazon's data centers&mdash;that you use to build and host your software
        systems.
      </p>
    </HelpPanel>
  );
}

export function DashboardHeader({ actions }: { actions: React.ReactNode }) {
  const loadHelpPanelContent = useHelpPanel();
  return (
    <Header
      variant="h1"
      info={<InfoLink onFollow={() => loadHelpPanelContent(<DashboardMainInfo />)} />}
      actions={actions}
    >
      Service Dashboard
    </Header>
  );
}
