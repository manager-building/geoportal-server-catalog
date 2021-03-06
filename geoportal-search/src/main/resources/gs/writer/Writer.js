/* See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * Esri Inc. licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(){
  
  gs.writer.Writer = gs.Object.create(gs.Proto,{
  
    write: {value: function(task,searchResult) {}},
  
    writeXmlResponse: {value: function(task,xml) {
      if (task.request.pretty) xml = task.context.indentXml(task,xml);
      var response = task.response;
      response.put(response.Status_OK,response.MediaType_APPLICATION_XML,xml);
    }}
  
  });

}());
