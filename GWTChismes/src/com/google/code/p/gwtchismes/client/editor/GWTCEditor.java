/*
 * Copyright 2010 Manuel Carrasco Moñino. (manuel_carrasco at users.sourceforge.net) 
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
package com.google.code.p.gwtchismes.client.editor;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.event.dom.client.FocusEvent;
import com.google.gwt.event.dom.client.FocusHandler;
import com.google.gwt.event.dom.client.KeyCodes;
import com.google.gwt.event.dom.client.KeyPressEvent;
import com.google.gwt.event.dom.client.KeyPressHandler;
import com.google.gwt.event.logical.shared.InitializeEvent;
import com.google.gwt.event.logical.shared.InitializeHandler;
import com.google.gwt.user.client.DOM;
import com.google.gwt.user.client.Element;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Focusable;
import com.google.gwt.user.client.ui.HasHTML;
import com.google.gwt.user.client.ui.RichTextArea;
import com.google.gwt.user.client.ui.VerticalPanel;


/**
 * Wysiwyg editor for composing and editing html texts.
 * Default RichTextArea in gwt comes without toolbar. 
 * 
 * This is an implementation of the RichTextArea with a pretty
 * toolbar with includes color-pickers and font-pickers.
 * 
 */
public class GWTCEditor extends VerticalPanel implements HasHTML, Focusable {
    
    RichTextArea area = new RichTextArea();
    boolean isNewMessage = true;
    
    public GWTCEditor() {
        this((ToolbarConstants)GWT.create(ToolbarConstants.class));
    }
    
    public GWTCEditor(ToolbarConstants constants) {
        area.ensureDebugId("GWTCEditor");
        area.setSize("100%", "234px");
        
        Toolbar toolbar = new Toolbar(area, constants);
        toolbar.ensureDebugId("GWTCToolbar");
        
        super.setStyleName("GWTCEditor");
        super.add(toolbar);
        super.add(area);
        super.setWidth("100%");
        
        // Note: rich-area is created in an iframe, so Hupa's style sheets 
        // are not available, unless we inject them to the generated iframe
        //
        // When body is available, we put the default style for messages:
        area.addInitializeHandler(new InitializeHandler() {
            public void onInitialize(InitializeEvent event) {
                setBodyStyleAttribute("fontFamily", "arial");
                setBodyStyleAttribute("fontSize", "80%");
            }
        });
        
    }
    
    @Override
    public void setSize(String width, String height) {
        area.setSize(width, height);
    }
    
    @Override
    public void setWidth(String width){
        area.setWidth(width);
    }

    @Override
    public void setHeight(String height){
        area.setHeight(height);
    }

    public String getHTML() {
        return area.getHTML();
    }

    public void setHTML(String html) {
        isNewMessage = html.isEmpty(); 
        area.setHTML("<font size=2 style='font-family: arial'><br/>" + html + "</font>");
    }

    public String getText() {
        return area.getText();
    }

    public void setText(String text) {
        area.setText(text);
    }

    public void setBodyStyleAttribute(final String key, final String value) {
        DOM.setStyleAttribute(getBody(area.getElement()), key, value);
    }
    
    public int getTabIndex() {
        return area.getTabIndex();
    }

    public void setAccessKey(char key) {
        area.setAccessKey(key);
    }

    public void setFocus(boolean focused) {
        area.setFocus(focused);
    }

    public void setTabIndex(int index) {
        area.setTabIndex(index);
    }
    
    // isEnabled and setEnabled dont work in richtextarea due to a bug,
    // I've sent a patch to gwt, when it is accepted this native methods can be
    // removed
    public void setEnabled(boolean b) {
        setEnabled(area.getElement(), b);
    }
    
    public boolean isEnabled() {
        return isEnabled(area.getElement());
    }
    
    private native void setEnabled(Element iframe, boolean b) /*-{
       var doc = iframe.contentWindow.document;
       if (doc.body.contentEditable) 
          doc.body.contentEditable = b;
       else 
          doc.designMode = b ? 'On' : 'Off';
    }-*/;

    private native boolean isEnabled(Element iframe) /*-{
       var doc = iframe.contentWindow.document;
       alert((doc.designMode.toUpperCase()) == 'ON');
       if (doc.body.contentEditable) {
           alert("editable ???");
          return doc.body.contentEditable;
       } else {
           var ret = (((doc.designMode).toUpperCase()) == 'ON') ? true : false;
           alert(ret);
           return ret;
       }
    }-*/;
    
    private native Element getBody(Element frame) /*-{
        return frame.contentWindow.document.body;
    }-*/;
    
}