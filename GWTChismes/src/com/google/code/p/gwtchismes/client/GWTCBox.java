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

package com.google.code.p.gwtchismes.client;

import java.util.Iterator;

import com.google.gwt.user.client.ui.DockPanel;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.Panel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.DockPanel.DockLayoutConstant;

public class GWTCBox extends Panel {
    HTML title = null;
    HTML text = null;
    DockPanel panel = new DockPanel();
    public static String CONFIG_BLUE = "x-box-blue";
	public void add(Widget w) {
		panel.add(w, DockPanel.NORTH);
	}
    public void add(Widget widget, DockLayoutConstant direction) {
        panel.add(widget, direction);
    }
	public boolean remove(Widget w) {
		return panel.remove(w);
	}
	public Iterator iterator() {
		return panel.iterator();
	}
	public GWTCBox() {
		/*
    	FlowPanel m = new FlowPanel();
    	SimplePanel tl = new SimplePanel();
    	SimplePanel tr = new SimplePanel();
    	SimplePanel tc = new SimplePanel();
    	SimplePanel ml = new SimplePanel();
    	SimplePanel mr = new SimplePanel();
    	SimplePanel mc = new SimplePanel();
    	SimplePanel bl = new SimplePanel();
    	SimplePanel br = new SimplePanel();
    	SimplePanel bc = new SimplePanel();
    	m.setStyleName("x-box");
    	tl.setStyleName("x-box-tl");
    	tr.setStyleName("x-box-tr");
    	tc.setStyleName("x-box-tc");
    	ml.setStyleName("x-box-ml");
    	mr.setStyleName("x-box-mr");
    	mc.setStyleName("x-box-mc");
    	bl.setStyleName("x-box-bl");
    	br.setStyleName("x-box-br");
    	bc.setStyleName("x-box-bc");
    	m.add(tl);
    	tl.add(tr);
    	tr.add(tc);
    	m.add(ml);
    	ml.add(mr);
    	mr.add(mc);
    	m.add(bl);
    	bl.add(br);
    	br.add(bc);
    	mc.add(panel);
    	setElement(m.getElement());
    	*/

		
    	FlowPanel m = new FlowPanel();
		m.setStyleName("x-box");
		String[] v = {"t", "m", "b"};
		String[] h = {"l", "r", "c"};
		for (int i = 0; i < 3; i++) {
			Panel l = null;
			for (int j = 0; j < 3; j++) {
				Panel e = new SimplePanel();
				e.setStyleName("x-box-" + v[i] + h[j]);
	            if (j==0) 
	            	m.add(e);
	            if (l !=null ) 
	            	l.add(e);
	            if (i==1 && j==2) 
	            	e.add(panel);
	            l = e;
            }
        }
		setElement(m.getElement());
	}
	
	public void setTitle(String title) {
	    if (this.title == null) {
	        this.title = new HTML();
	        panel.add(this.title, DockPanel.NORTH);
	    }
	    this.title.setHTML("<h3>" + title + "</h3>");
	}
    public void setText(String text) {
        if (this.text == null) {
            this.text = new HTML();
            panel.add(this.text, DockPanel.CENTER);
        }
        this.title.setHTML("<p>" + text + "</p>");
    }
}
