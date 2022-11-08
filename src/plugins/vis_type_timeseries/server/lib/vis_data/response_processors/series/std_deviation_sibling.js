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

import { getSplits, getLastMetric, getSiblingAggValue } from '../../helpers';

export function stdDeviationSibling(resp, panel, series, meta) {
  return (next) => (results) => {
    const metric = getLastMetric(series);
    if (metric.mode === 'band' && metric.type === 'std_deviation_bucket') {
      getSplits(resp, panel, series, meta).forEach((split) => {
        const data = split.timeseries.buckets.map((bucket) => [
          bucket.key,
          getSiblingAggValue(split, { ...metric, mode: 'upper' }),
          getSiblingAggValue(split, { ...metric, mode: 'lower' }),
        ]);

        results.push({
          id: split.id,
          label: split.label,
          color: split.color,
          lines: {
            show: series.chart_type === 'line',
            fill: 0.5,
            lineWidth: 0,
            mode: 'band',
          },
          bars: {
            show: series.chart_type === 'bar',
            fill: 0.5,
            mode: 'band',
          },
          points: { show: false },
          data,
        });
      });
    }

    return next(results);
  };
}
