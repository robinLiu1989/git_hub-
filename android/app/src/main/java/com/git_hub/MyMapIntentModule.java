package com.git_hub;

import android.app.Activity;

import android.app.ActivityManager;
import android.content.Intent;
import android.text.TextUtils;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;


import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;

public class MyMapIntentModule extends ReactContextBaseJavaModule {

  public static final String REACTCLASSNAME = "MyMapIntentModule";
  private Context mContext;

  public MyMapIntentModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mContext = reactContext;
  }

  @Override
  public String getName() {
    return REACTCLASSNAME;
  }
 /**
     * js页面跳转到activity 并传数据
     * @param name
     */
    @ReactMethod
    public void startActivityByClassname(String name){
        try{
            Activity currentActivity = getCurrentActivity();
            if(null!=currentActivity){
                Class aimActivity = Class.forName(name);
                Intent intent = new Intent(currentActivity,aimActivity);
             /**
               * Intent.putExtra('params',params);   RN可以向原生传参
                *      intent.putExtra("logo", logo);
                * intent.putExtra("title", title);

             */
                currentActivity.startActivity(intent);
            }
        }catch(Exception e){

            throw new JSApplicationIllegalArgumentException(
                    "无法打开activity页面: "+e.getMessage());
        }
    }

     @ReactMethod

          public void startActivityForResult(String activityName,int requestCode,Callback successCallback,Callback erroCallback){
              try {
                  Activity currentActivity = getCurrentActivity();
                  if ( null!= currentActivity) {
                      Class aimActivity = Class.forName(activityName);
                      Intent intent = new Intent(currentActivity,aimActivity);
                      currentActivity.startActivityForResult(intent,requestCode);
                      String result = MainActivity.myBlockingQueue.take();
                      successCallback.invoke(result);
                      Log.e("MainActivity",result);
                  }
              } catch (Exception e) {
                  erroCallback.invoke(e.getMessage());
                  throw new JSApplicationIllegalArgumentException(
                          "Could not open the activity : " + e.getMessage());
              }
          }

}