/*
 * Copyright 2007 Manuel Carrasco Moñino. (manuel_carrasco at users.sourceforge.net) 
 * http://code.google.com/p/gwtchismes
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package jschismes.client;

import org.timepedia.exporter.client.Export;
import org.timepedia.exporter.client.ExportPackage;
import org.timepedia.exporter.client.Exportable;

import com.google.code.p.gwtchismes.client.GWTCPopupBox;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

/**
 * Popup dialog that can use rounded corners.
 */
@Export
@ExportPackage("jsc")
public class Popup extends GWTCPopupBox implements Exportable {

  private JsProperties jsProp;

  public Popup(JavaScriptObject prop) {
    super(OPTION_DISABLE_AUTOHIDE);

    this.jsProp = new JsProperties(prop);

    int cfg = OPTION_DISABLE_AUTOHIDE;

    String box = jsProp.get(Const.RND_BOX);
    if ("flat".equals(box))
      cfg |= OPTION_ROUNDED_FLAT;
    if ("grey".equals(box))
      cfg |= OPTION_ROUNDED_GREY;
    if ("blue".equals(box))
      cfg |= OPTION_ROUNDED_BLUE;
    if (!jsProp.getBoolean(Const.GLASS, true))
      cfg |= OPTION_DISABLE_BACKGROUND;
    if (jsProp.getBoolean(Const.ANIMATE))
      cfg |= OPTION_ANIMATION;
    super.initialize(cfg);

    if (jsProp.defined(Const.CLASS_NAME))
      super.setStyleName(jsProp.get(Const.CLASS_NAME));

    if (jsProp.defined(Const.TEXT))
      add(jsProp.get(Const.TEXT));

  }

  /**
   * Show the modal dialog containing the dialog, and hide it when the number of seconds is reached.
   * A value of 0 means show it untill hide() method is called
   */
  public void show(int seconds) {
    super.show(seconds);
  }

  /**
   * Hide the dialog
   */
  public void hide() {
    super.hide();
  }

  /**
   * Remove all child elements from the panel
   */
  public void clear() {
    super.clear();
  }

  /**
   * Add a new element to the panel
   */
  public void add(Object object) {
    add(object, Const.NORTH);
  }

  /**
   * Add a new element to the panel, in the specified direction (NORTH, SOUTH, EAST, WEST)
   */
  public void add(Object object, DockLayoutConstant direction) {
    super.add(object, direction);
  }

}
