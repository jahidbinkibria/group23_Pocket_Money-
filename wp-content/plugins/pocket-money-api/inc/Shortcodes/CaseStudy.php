<?php


/**
 * @package PMApiPlugin
 */

namespace Inc\Shortcodes;

use Inc\Api\ShortcodeApi;
use \Inc\Base\BaseController;
use \Inc\Api\Callbacks\ShortcodeCallbacks;

class CaseStudy extends BaseController
{

  public $shortcodes;

  public $callbacks;

  public function register()
  {

    $this->shortcodes = new ShortcodeApi();
    $this->callbacks = new ShortcodeCallbacks();

    $shortcodes = [
      [
        'tag' => 'casestudy',
        'callback' => [$this->callbacks, 'cb_casestudy']
      ],
      [
        'tag' => 'casestudytax',
        'callback' => [$this->callbacks, 'cb_casestudytax']
      ]
    ];

    $this->shortcodes->addShortcodes($shortcodes)->register();
  }
}