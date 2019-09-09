package com.simpson.modules;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import android.content.Intent;
import android.net.Uri;
import android.widget.Toast;

import com.simpson.R;

public class MyShareModule extends ReactContextBaseJavaModule {

  public MyShareModule (ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "MyShareModule";
  }

  // @Override
  //   public Map<String, Object> getConstants() {
  //     final Map<String, Object> constants = new HashMap<>();
  //     constants.put("AUDIO_TYPE", "audio/mp3");
  //     return constants;
  // }

  @ReactMethod
  public void share(String file) {

    //Uri uri = Uri.parse("android.resource://com.simpson/raw/" + file);
    //Uri uri = Uri.parse(file);
    // Uri uri = Uri.parse("android.resource://com.simpson/" + R.raw.alf + ".mp3");

    Intent sendIntent = new Intent();
    sendIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    sendIntent.setAction(Intent.ACTION_SEND);
    //sendIntent.putExtra(Intent.EXTRA_STREAM, uri);
    sendIntent.putExtra(Intent.EXTRA_TEXT, file);
    sendIntent.setType("text/plain");
    //sendIntent.setType("audio/mp3");
    getReactApplicationContext().startActivity(sendIntent);

    // Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();
  }
}
