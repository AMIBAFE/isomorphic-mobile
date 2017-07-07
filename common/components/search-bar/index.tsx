import "./index.less";

import * as React from "react";

import { render } from "react-dom";
import { Link } from "react-router-dom";
import { number, string, array, bool, func } from "prop-types";
import { TeacherBasic } from '../../interfaces/teacher';
import { getSuggestion } from "../../actions/search";

interface SearchProps {
  searchLists?: TeacherBasic[];
}
interface SearchState {
  value?: string;
}
export default class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      value: ""
    };
  }
  onClick(event: any) {
    event.preventDefault();
    console.log(this.state.value);
  }
  onChange(event: any) {
    let value = event.target.value;

    this.setState(state => {
      state.value = value;
      return state;
    });
  }

  render() {
    return (
      <div className="search-bar-wrapper col-l">
        <div className="search-box-wrapper">
          <div >
            <div className="type-wrapper">
              <div className="type-header dropdown">
                <a href="javascript:;" className="dropdown-header">
                  课程
                </a>
                <div className="dropdown-panel">
                  <a className="dropdown-item">
                    <i className="dropdown-icon course" />
                    <span className="dropdown-label">
                      课程
                    </span>
                  </a>
                  <a className="dropdown-item">
                    <i className="dropdown-icon studio" />
                    <span className="dropdown-label">
                      机构
                    </span>
                  </a>
                  <a className="dropdown-item">
                    <i className="dropdown-icon teacher" />
                    <span className="dropdown-label">
                      老师
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <input
              ref="input"
              type="text"
              value={this.state.value}
              onChange={this.onChange.bind(this)}
              placeholder="请输入您要找的内容"
            />
            <a onClick={this.onClick.bind(this)} href="javascript:;">
              <span className="text">确定</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
