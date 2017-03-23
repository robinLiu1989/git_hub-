package com.git_hub;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import android.util.Log;

import java.util.concurrent.ArrayBlockingQueue;


public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "git_hub";
    }

      public static ArrayBlockingQueue<String> myBlockingQueue = new ArrayBlockingQueue<String>(1);
       @Override
       public void onActivityResult(int requestCode, int resultCode, Intent data) {
           super.onActivityResult(requestCode, resultCode, data);
           if(resultCode == RESULT_OK && requestCode == 100){
               String result = data.getStringExtra("result");
               if (!result.isEmpty()){
                   MainActivity.myBlockingQueue.add(result);
               } else {
                   MainActivity.myBlockingQueue.add("无数据传回");
               }

       }else{
           MainActivity.myBlockingQueue.add("没有");
       }
    }
}