import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for work opportunities!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                  phone: (six.oh.2) six.28-3.one.o.8
                </h4>
                <h4>
                  email: mattaszeto (at) gmail(dot)com
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}