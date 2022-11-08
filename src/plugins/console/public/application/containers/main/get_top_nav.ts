/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import { i18n } from '@osd/i18n';

interface Props {
  onClickHistory: () => void;
  onClickSettings: () => void;
  onClickHelp: () => void;
}

export function getTopNavConfig({ onClickHistory, onClickSettings, onClickHelp }: Props) {
  return [
    {
      id: 'history',
      label: i18n.translate('console.topNav.historyTabLabel', {
        defaultMessage: 'History',
      }),
      description: i18n.translate('console.topNav.historyTabDescription', {
        defaultMessage: 'History',
      }),
      onClick: () => {
        onClickHistory();
      },
      testId: 'consoleHistoryButton',
    },
    {
      id: 'settings',
      label: i18n.translate('console.topNav.settingsTabLabel', {
        defaultMessage: 'Settings',
      }),
      description: i18n.translate('console.topNav.settingsTabDescription', {
        defaultMessage: 'Settings',
      }),
      onClick: () => {
        onClickSettings();
      },
      testId: 'consoleSettingsButton',
    },
    {
      id: 'help',
      label: i18n.translate('console.topNav.helpTabLabel', {
        defaultMessage: 'Help',
      }),
      description: i18n.translate('console.topNav.helpTabDescription', {
        defaultMessage: 'Help',
      }),
      onClick: () => {
        onClickHelp();
      },
      testId: 'consoleHelpButton',
    },
  ];
}