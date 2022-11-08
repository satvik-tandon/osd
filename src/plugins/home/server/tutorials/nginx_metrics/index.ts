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
import { TutorialsCategory } from '../../services/tutorials';
import { onPremInstructions } from '../instructions/metricbeat_instructions';
import {
  TutorialContext,
  TutorialSchema,
} from '../../services/tutorials/lib/tutorials_registry_types';

export function nginxMetricsSpecProvider(context: TutorialContext): TutorialSchema {
  const moduleName = 'nginx';
  return {
    id: 'nginxMetrics',
    name: i18n.translate('home.tutorials.nginxMetrics.nameTitle', {
      defaultMessage: 'Nginx metrics',
    }),
    moduleName,
    category: TutorialsCategory.METRICS,
    shortDescription: i18n.translate('home.tutorials.nginxMetrics.shortDescription', {
      defaultMessage: 'Fetch internal metrics from the Nginx HTTP server.',
    }),
    longDescription: i18n.translate('home.tutorials.nginxMetrics.longDescription', {
      defaultMessage:
        'The `nginx` Metricbeat module fetches internal metrics from the Nginx HTTP server. \
The module scrapes the server status data from the web page generated by the \
{statusModuleLink}, \
which must be enabled in your Nginx installation. \
[Learn more]({learnMoreLink}).',
      values: {
        statusModuleLink:
          '[ngx_http_stub_status_module](http://nginx.org/en/docs/http/ngx_http_stub_status_module.html)',
        learnMoreLink: '{config.docs.beats.metricbeat}/metricbeat-module-nginx.html',
      },
    }),
    euiIconType: 'logoNginx',
    artifacts: {
      dashboards: [
        {
          id: '023d2930-f1a5-11e7-a9ef-93c69af7b129-ecs',
          linkLabel: i18n.translate('home.tutorials.nginxMetrics.artifacts.dashboards.linkLabel', {
            defaultMessage: 'Nginx metrics dashboard',
          }),
          isOverview: true,
        },
      ],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-nginx.html',
      },
    },
    completionTimeMinutes: 10,
    onPrem: onPremInstructions(moduleName, context),
  };
}
