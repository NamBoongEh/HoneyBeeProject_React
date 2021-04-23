import React, { useState } from 'react';
import styled from 'styled-components';

const DateBox = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  &:hover {
    cursor: pointer;
  }
`;

const DateBox1 = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
const DateBox2 = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid black;
  padding: 0.5px 0 0 4px;
  color: blue;
  &:hover {
    cursor: pointer;
  }
`;

const Calendar = ({ calendar, showInput }) => {
  return (
    <>
      <div
        className={'container-fluid'}
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: 0,
        }}
      >
        <div style={{ display: 'flex' }}>
          <DateBox />
          <DateBox />
          <DateBox />
          <DateBox />
          <DateBox>1</DateBox>
          <DateBox>2</DateBox>
          <DateBox2>3</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>4</DateBox1>
          <DateBox>5</DateBox>
          <DateBox>6</DateBox>
          <DateBox>7</DateBox>
          <DateBox>8</DateBox>
          <DateBox>9</DateBox>
          <DateBox2>10</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>11</DateBox1>
          <DateBox>12</DateBox>
          <DateBox>13</DateBox>
          <DateBox>14</DateBox>
          <DateBox>15</DateBox>
          <DateBox>16</DateBox>
          <DateBox2>17</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>18</DateBox1>
          <DateBox>19</DateBox>
          <DateBox>20</DateBox>
          <DateBox>21</DateBox>
          <DateBox>22</DateBox>
          <DateBox>23</DateBox>
          <DateBox2>24</DateBox2>
        </div>
        <div style={{ display: 'flex' }}>
          <DateBox1>25</DateBox1>
          <DateBox>26</DateBox>
          <DateBox>27</DateBox>
          <DateBox>28</DateBox>
          <DateBox>29</DateBox>
          <DateBox>30</DateBox>
          <DateBox></DateBox>
        </div>
      </div>
    </>
  );
};

export default Calendar;
