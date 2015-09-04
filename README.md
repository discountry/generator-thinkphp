# generator-thinkphp

> Yeoman generator for ThinkPHP - Create ThinkPHP Project and generate Controller/Model/View for it.


##Usage

Install `Composer` [Read more about composer](https://getcomposer.org/)
```
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```


Install `yo` and `generator-thinkphp`:
```
npm install -g yo generator-thinkphp
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo thinkphp` to init your project, and follow the steps:
```
yo thinkphp
```

## Generators

Available generators:

* [thinkphp](#app) (aka [thinkphp:app](#app))
* [thinkphp:controller](#controller)
* [thinkphp:model](#model)
* [thinkphp:space](#space)

### App

Create a new project using [ThinkPHP](https://github.com/liu21st/thinkphp) and using [Composer](https://getcomposer.org/).

Example:
```bash
yo thinkphp
```

### Controller

Generates a controller and view for your app. Command like `yo thinkphp:controller [classedName] [spaceName]`.

**The `classedName` is required value, without it will get error.**

**The default `spaceName` is `Home` and it's optional.**

Example:
```bash
yo thinkphp:controller Index Home
```

Produces `app/Home/Controller/IndexController.class.php`:
```php
<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {

    public function index(){
    	//
        $this->display();
    }

}
```

Produces `app/Home/View/index.html`:

```html
<extend name="base" />
<block name="content">
	<<h1>Index</h1>
</block>
```

### Model

Much like Controller generator, it generates a plain model for your Project.

Example:
```bash
yo thinkphp:model User Home
```

Produces `app/Home/Model/UserModel.class.php`:
```php
<?php
namespace Home\Model;
use Think\Model;
class UserModel extends Model {
	//
    protected $tableName = 'User'; 

}
```

### Space

Create a new namespace folder for you app.

Example:
```bash
yo thinkphp:space Admin
```

Produces `app/Admin` folder and default files in your project.

* Admin 
	* Common
	* Conf 
	* Controller 
	* Model 
	* View 
	* index.html

## About 

Add command line tools for ThinkPHP. Just like [Laravel](http://laravel.com)'s `php artisan`

## License

MIT
