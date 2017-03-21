package com.git_hub;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import android.text.TextUtils;
import android.app.Activity;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;



/**
 * Created by Administrator on 2016/10/30.
 */

public class TestCallback {


      public void dataToJS(Callback successBack, Callback errorBack){
                 try{
                     String result = "这数据来自Android Native";
                     if (TextUtils.isEmpty(result)){
                         result = "没有数据";
                     }
                     successBack.invoke(result);
                 }catch (Exception e){
                     errorBack.invoke(e.getMessage());
                 }
      }
}